(() => {
	const { ipcRenderer } = require('electron')

	// Start on computer boot
	const startOnBoot = document.getElementById( 'startOnBoot' )
	const startOnBootLabel = document.getElementById( 'startOnBootLabel' )

	const setStartOnBoot = value => {

		startOnBoot.checked = value

	}

	ipcRenderer.on( 'load_start_on_boot', arg => {

		setStartOnBoot( arg )

	} )

	startOnBoot.addEventListener('change', value => {
		ipcRenderer.send('set_start_on_boot', startOnBoot.checked)
	})

})()