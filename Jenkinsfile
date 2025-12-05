pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'dev',
                    credentialsId: 'github',
                    url: 'https://github.com/fidakacem/myRecipeApp.git'
            }
        }

        stage('Setup') {
            steps {
                bat 'npm install --force'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t recettes-app:test .'
            }
        }

        stage('Run Docker') {
            steps {
                bat '''
                    docker run -d -p 3000:80 --name test_container recettes-app:test
                '''
                sleep 5
            }
        }

        stage('Smoke Test') {
            steps {
                bat '.\\smoke-test.bat > smoke-log.txt'
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'smoke-log.txt'
            }
        }
    }

    post {
        always {
            echo "Cleaning up..."
            bat '''
                docker rm -f test_container || echo container removed
                docker image rm recettes-app:test || echo image removed
            '''
        }
    }
}