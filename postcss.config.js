module.exports = {
    plugins: {
        'autoprefixer': {},
        'stylelint': {
            configFile: '.stylelintrc'
        },
        'postcss-reporter': {
            clearReportedMessages: true
        }
    }
}