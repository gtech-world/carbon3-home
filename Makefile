
.PHONY: build-beta
build-beta: ## Build the beta docker image.
	docker compose -f docker/beta/docker-compose.yml build

.PHONY: start-beta
start-beta: ## Start the development docker container.
	docker compose -f docker/beta/docker-compose.yml up -d

.PHONY: build-prod
build-prod: ## Build the beta docker image.
	docker compose -f docker/prod/docker-compose.yml build	

.PHONY: start-prod
start-prod: ## Start the development docker container.
	docker compose -f docker/prod/docker-compose.yml up -d
