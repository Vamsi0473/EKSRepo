pipeline {
    agent any

    stages {
        stage('Build') {
           steps {
             
             bat 'npm install'  
              
               
            }
        }
       
       
        stage('Push image') {
         steps {
             script{
           
              //  }
              docker.withRegistry('https://793737242214.dkr.ecr.us-east-1.amazonaws.com',
                     'ecr:us-east-1:AWS_EKS')
                   {
                     def myImage=docker.build('react-app')
                            
                   }
             }
        }
        }
        stage('Push Image') {
            steps {
docker.withRegistry('https://793737242214.dkr.ecr.us-east-1.amazonaws.com',
                     'ecr:us-east-1:AWS_EKS')
                   {
                     
                            myImage.push('1.0.8')
                   }
          
}
               
            }
        }
    }
}