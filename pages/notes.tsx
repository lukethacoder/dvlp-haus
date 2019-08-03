import * as React from "react"
import ReactDOM from "react-dom"
import ReactMarkdown from "react-markdown"
import Prism from "prismjs"
import Link from "next/link"
import { NextPage } from "next"

import Layout from "../components/Layout"
import Container from "../components/Container"

const NotesPage: NextPage<any> = () => {
	const [notesData, setNotesData] = React.useState("")
	// types 'both', 'pretty', 'both'
	const [view, setView] = React.useState("both")

	React.useEffect(() => {
		const data = localStorage.getItem("dvlp__haus_notes")
		if (!notesData && data) {
			setNotesData(data)
			localStorage.setItem("dvlp__haus_notes", data)
		}
	})

	function updateLocalStorage(e: any) {
		const { value } = e.target
		localStorage.setItem("dvlp__haus_notes", value)
		setNotesData(value)
	}

	function addTabs(e: any) {
		e.persist()
		// gets tab keyCode
		if (e.keyCode === 9) {
			e.preventDefault()
			// add 4 spaces where current cursor is at
			console.log(e.keyCode)
		}
	}

	function toggleView() {
		switch (view) {
			case "raw":
				setView("pretty")
				break
			case "pretty":
				setView("both")
				break
			case "both":
				setView("raw")
				break
		}
	}

	return (
		<Layout current="Notes" title="NOTES | DVLP HAUS | toolbox for developers">
			<Container customClass="page__notes">
				<div className="page__notes_wrapper">
					<div className="btn-toggle">
						<p onClick={toggleView}>
							view: <span>{view}</span>
						</p>
					</div>

					<div
						className={`notes__raw ${
							view === "raw" || view === "both" ? "active" : ""
						}`}
					>
						<textarea
							value={notesData}
							onChange={(e) => updateLocalStorage(e)}
							onKeyDown={(e) => addTabs(e)}
							name="svgCode"
							placeholder="your notes will be saved - just don't hard refresh"
							spellCheck={true}
						></textarea>
					</div>
				</div>
				<div
					className={`notes__markdown ${
						view === "pretty" || view === "both" ? "active" : ""
					}`}
				>
					<ReactMarkdown source={notesData} />
				</div>
			</Container>
		</Layout>
	)
}

export default NotesPage
