function info(manufacturer, modelname, color, optionalfeature) {
    const car = { manufacturer, modelname, color, optionalfeature }
    console.log("Manufacturer is", manufacturer, "Model is", modelname, "Color is", color, "Optional Feature is", optionalfeature)
}

info("toyota", "1988", "blue", "tinted")