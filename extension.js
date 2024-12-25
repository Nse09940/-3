const vscode = require('vscode');

function activate(context) {
    console.log('Congratulations, your extension "my-first-extension" is now active!');

    let disposable = vscode.commands.registerCommand('extension.sayHello', function () {
        // Эмуляция alert через showInformationMessage
        vscode.window.showInformationMessage('hi');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
