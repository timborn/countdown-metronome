.PHONY: push
WEBSITE = deltacfax.com:deltacfax.com/denborn
WEBFILES = sound.html sound2.html

push:
	scp ${WEBFILES} ${WEBSITE}

# vim: set tabstop=8 softtabstop=8 shiftwidth=8 noexpandtab :
