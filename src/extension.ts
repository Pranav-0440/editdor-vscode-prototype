import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerCommand('editdor.open', () => {

		const panel = vscode.window.createWebviewPanel(
			'editdor',
			'EdiTDor Preview',
			vscode.ViewColumn.One,
			{ enableScripts: true }
		);

		panel.webview.html = `
		<!DOCTYPE html>
		<html>
		<body>

		<h2>EdiTDor Prototype inside VS Code</h2>

		<iframe
			src="https://editdor.netlify.app/"
			width="100%"
			height="800"
			frameborder="0">
		</iframe>

		</body>
		</html>
		`;
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}