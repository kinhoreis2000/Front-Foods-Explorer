# Frontend Deployment
resource "kubernetes_deployment" "frontend" {
  metadata {
    name = "frontend"
    labels = {
      app = "frontend"
      project = var.project_name
      environment = var.environment
    }
  }

  spec {
    replicas = var.frontend_replicas

    selector {
      match_labels = {
        app = "frontend"
      }
    }

    template {
      metadata {
        labels = {
          app = "frontend"
          project = var.project_name
          environment = var.environment
        }
      }

      spec {
        container {
          image = var.frontend_image
          name  = "frontend"
          image_pull_policy = "IfNotPresent"

          port {
            container_port = var.frontend_port
          }

          env {
            name  = "VITE_API_URL"
            value = var.api_url
          }
        }
      }
    }
  }
}

# Frontend Service
resource "kubernetes_service" "frontend" {
  metadata {
    name = "frontend-service"
    labels = {
      app = "frontend"
      project = var.project_name
      environment = var.environment
    }
  }

  spec {
    selector = {
      app = "frontend"
    }

    port {
      port        = 3000
      target_port = var.frontend_port
      node_port   = var.frontend_node_port
    }

    type = "NodePort"
  }
}