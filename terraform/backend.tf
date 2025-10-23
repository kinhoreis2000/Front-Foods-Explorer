# Backend Deployment (sem PersistentVolume por enquanto)
resource "kubernetes_deployment" "backend" {
  metadata {
    name = "backend"
    labels = {
      app = "backend"
      project = var.project_name
      environment = var.environment
    }
  }

  spec {
    replicas = var.backend_replicas

    selector {
      match_labels = {
        app = "backend"
      }
    }

    template {
      metadata {
        labels = {
          app = "backend"
          project = var.project_name
          environment = var.environment
        }
      }

      spec {
        container {
          image = var.backend_image
          name  = "backend"
          image_pull_policy = "IfNotPresent"

          port {
            container_port = var.backend_port
          }

          env {
            name  = "SERVER_PORT"
            value = tostring(var.backend_port)
          }

          # Health checks básicos
          liveness_probe {
            http_get {
              path = "/"
              port = var.backend_port
            }
            initial_delay_seconds = 30
            period_seconds = 10
            failure_threshold = 3
          }

          readiness_probe {
            http_get {
              path = "/"
              port = var.backend_port
            }
            initial_delay_seconds = 5
            period_seconds = 5
            failure_threshold = 3
          }
        }
      }
    }
  }
}

# Backend Service
resource "kubernetes_service" "backend" {
  metadata {
    name = "backend-service"
    labels = {
      app = "backend"
      project = var.project_name
      environment = var.environment
    }
  }

  spec {
    selector = {
      app = "backend"
    }

    port {
      port        = var.backend_port
      target_port = var.backend_port
      node_port   = var.backend_node_port
    }

    type = "NodePort"
  }
}