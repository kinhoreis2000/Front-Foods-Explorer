variable "project_name" {
  description = "Nome do projeto"
  type        = string
  default     = "food-explorer"
}

variable "environment" {
  description = "Ambiente (dev, staging, prod)"
  type        = string
  default     = "dev"
}

# Backend variables
variable "backend_image" {
  description = "Imagem Docker do backend"
  type        = string
  default     = "backend-foodexplorer-image:latest"
}

variable "backend_port" {
  description = "Porta do backend"
  type        = number
  default     = 5000
}

variable "backend_replicas" {
  description = "Número de réplicas do backend"
  type        = number
  default     = 1
}

variable "backend_node_port" {
  description = "NodePort do backend"
  type        = number
  default     = 31234
}

# Frontend variables
variable "frontend_image" {
  description = "Imagem Docker do frontend"
  type        = string
  default     = "frontend-foodexplorer-image:latest"
}

variable "frontend_port" {
  description = "Porta do frontend"
  type        = number
  default     = 80
}

variable "frontend_replicas" {
  description = "Número de réplicas do frontend"
  type        = number
  default     = 1
}

variable "frontend_node_port" {
  description = "NodePort do frontend"
  type        = number
  default     = 30007
}

variable "api_url" {
  description = "URL da API para o frontend"
  type        = string
  default     = "http://localhost:5000"
}