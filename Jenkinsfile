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
                sh 'npm install --force'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t recettes-app:test .'
            }
        }

        stage('Run Docker') {
            steps {
                sh '''
                    docker run -d -p 3000:80 --name test_container recettes-app:test
                    sleep 5
                '''
            }
        }

        stage('Smoke Test') {
            steps {
                sh 'sh smoke-test.sh > smoke-log.txt'
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
            sh '''
                docker rm -f test_container || true
                docker image rm recettes-app:test || true
            '''
        }
    }
}
