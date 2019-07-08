pipeline {
  agent {
    dockerfile {
      args '--network isolated_nw'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Sonarqube') {
      environment {
        scannerHome = tool 'SonarScanner 4.0'
      }
      steps {
        withSonarQubeEnv('SonarQube Server') {
          sh "${scannerHome}/bin/sonar-scanner"
        }
        timeout(time: 5, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
        }
      }
    }
  }
}
