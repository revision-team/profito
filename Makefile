deploy:
	git checkout develop
	git merge test
	git push origin develop test
	git checkout test