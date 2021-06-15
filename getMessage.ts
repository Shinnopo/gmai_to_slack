const getMessage = () => {
	const threads = GmailApp.search('label:unread from:example.com')
	const messages = GmailApp.getMessagesForThreads(threads)

	for (let i in messages) {
		for (let j in messages[i]) {
			let mail_subject = messages[i][j].getSubject()
			let mail_message = messages[i][j].getPlainBody()
		}
	}
}