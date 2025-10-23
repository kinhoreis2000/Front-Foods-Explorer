# Configurações específicas do ambiente
project_name = "food-explorer"
environment  = "dev"

# Backend
backend_image     = "backend-foodexplorer-image:latest"
backend_port      = 5000
backend_replicas  = 1
backend_node_port = 31234

# Frontend
frontend_image     = "frontend-foodexplorer-image:latest"
frontend_port      = 80
frontend_replicas  = 1
frontend_node_port = 30007

# API URL que o frontend vai usar
api_url = "http://localhost:5000"