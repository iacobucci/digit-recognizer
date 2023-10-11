compile:
	buf generate
	(cd nn && poetry install)
	(cd node && npm install && npm run build)

serve:
	(cd nn && poetry run serve) &
	(cd node && npm run serve) &
