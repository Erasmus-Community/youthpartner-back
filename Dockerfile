FROM library/postgres
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB test_erasmus
COPY config/schema.sql /docker-entrypoint-initdb.d/