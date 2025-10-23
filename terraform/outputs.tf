output "frontend_url" {
  description = "URL do frontend"
  value       = "http://localhost:3000"
}

output "backend_url" {
  description = "URL do backend"
  value       = "http://localhost:5000"
}

output "backend_service_name" {
  description = "Nome do serviço do backend"
  value       = kubernetes_service.backend.metadata[0].name
}

output "frontend_service_name" {
  description = "Nome do serviço do frontend"
  value       = kubernetes_service.frontend.metadata[0].name
}

output "backend_deployment_name" {
  description = "Nome do deployment do backend"
  value       = kubernetes_deployment.backend.metadata[0].name
}

output "frontend_deployment_name" {
  description = "Nome do deployment do frontend"
  value       = kubernetes_deployment.frontend.metadata[0].name
}