import * as React from "react"
import Link from "next/link"
import { NextPage } from "next"

import Layout from "../components/Layout"
import Container from "../components/Container"

// import { loadFirebase } from '../lib/db'

const NotesPage: NextPage<any> = () => {
	const [notesData, setNotesData] = React.useState("")
	// static async getInitialProps() {
	//   console.log('hola')
	// }

	React.useEffect(() => {
		localStorage.setItem("dvlp__haus_notes", "no notes data here")
		const data = localStorage.getItem("dvlp__haus_notes")
		if (data) {
			setNotesData(data)
		}
		console.log(data)
	})

	// localStorage.setItem('_increment', JSON.stringify(this.state))

	return (
		<Layout current="Notes" title="NOTES | DVLP HAUS | toolbox for developers">
			<Container customClass="page__notes">
				<div className="open">
					<ul className="nav__list"></ul>
				</div>
			</Container>
		</Layout>
	)
}

// IndexPage.getInitialProps = async () => {
//   // const items: UsefulLinksProps[] = await findAll()
//   const allCategoryOptions: any = await getAllCategories();
//   const items: UsefulLinksProps[] = await findCategory();

//   return { items, allCategoryOptions }
// }

export default NotesPage
