pipeline{
	agent{
		node{
			label 'built-in'
        customWorkspace '/mnt/jenkins'
        }
        }
        stages{
        stage ('new folder')
        {
        steps
        {
        sh 'mkdir wnsssssss'
        }
        }
        }
        }
