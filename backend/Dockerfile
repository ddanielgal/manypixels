FROM python:3.6-alpine

ENV CONFIG_FILE=/code/config.yaml

RUN mkdir /code
ADD . /code
WORKDIR /code

RUN apk add --no-cache --virtual .build-deps gcc build-base python3-dev py-pip jpeg-dev zlib-dev musl-dev postgresql-dev && \
    pip install pipenv && \
    pipenv lock && \
    pipenv install --system --dev && \
    apk del --no-cache .build-deps && \
    apk add libpq

ENTRYPOINT ["sh", "docker-entrypoint.sh"]
