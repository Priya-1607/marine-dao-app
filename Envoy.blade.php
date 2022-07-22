@servers(["web" => "root@{$serverIp}"])

@setup
$repository = 'https://ci:3y_GNff9sr-fo4D31cnx@gitlab.com/bucle1/bucleweb-v2.git';
$releases_dir = '/var/www/bucle-new-website/releases';
$app_dir = '/var/www/bucle-new-website';
$release = date('YmdHis');
$new_release_dir = $releases_dir .'/'. $release;
@endsetup

@story('deploy')
clone_repository
run_npm_install
create_build
update_symlinks
restarting_pm2
restart_nginx
remove_old_builds
@endstory

@task('clone_repository')
echo 'Cloning repository'
[ -d {{ $app_dir }} ] || mkdir {{ $app_dir }}
[ -d {{ $releases_dir }} ] || mkdir {{ $releases_dir }}

@if($env === 'production' && $tag)
git clone --depth 1 --branch {{ $tag }} {{ $repository }} {{ $new_release_dir }}
@else
git clone --depth 1 --branch {{ $branch }} {{ $repository }} {{ $new_release_dir }}
@endif
cd {{ $new_release_dir }}
git reset --hard {{ $commit }}

@endtask

@task('run_npm_install')
echo "Starting deployment ({{ $release }})"
cd {{ $new_release_dir }}
npm install
@endtask

@task('create_build')
echo "Starting build ({{ $release }})"
cd {{ $new_release_dir }}
npm run build
@endtask

@task('update_symlinks')
echo 'Linking current release'
ln -nfs {{ $new_release_dir }} {{ $app_dir }}/current
@endtask

@task('restarting_pm2')
echo "Restarting pm2"
pm2 restart bucle-web
@endtask

@task('restart_nginx')
service nginx restart
@endtask

@task('remove_old_builds')
sudo find {{ $releases_dir }} -mindepth 1 ! -regex '^{{ $new_release_dir }}\(/.*\)?' -delete
@endtask
