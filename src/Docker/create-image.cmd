docker build --no-cache -f SQL\Dockerfile.PostgreSql -t semya12/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t semya12/app ../..
