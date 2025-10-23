# Job para executar migrations (executar apenas uma vez)
resource "kubernetes_job" "database_migration" {
  metadata {
    name = "database-migration"
    labels = {
      app = "backend"
      project = var.project_name
      environment = var.environment
    }
  }

  spec {
    template {
      metadata {
        labels = {
          app = "backend-migration"
        }
      }

      spec {
        restart_policy = "Never"

        container {
          name  = "migration"
          image = var.backend_image
          image_pull_policy = "IfNotPresent"

          command = ["/bin/sh", "-c"]
          args = ["cd /app && npm run migrate && echo 'Migrations executadas com sucesso!'"]

          env {
            name  = "SERVER_PORT"
            value = tostring(var.backend_port)
          }
        }
      }
    }

    backoff_limit = 3
  }
}