.PHONY: push
WEBSITE = deltacfax.com:/home/timborn/deltacfax.com/denborn/
WEBFILES = sound.html sound2.html timer.html timer.js

push:
	scp -r * ${WEBSITE}

# vim: set tabstop=8 softtabstop=8 shiftwidth=8 noexpandtab :
