const departmentList = document.getElementById('department-list')

function renderDepartmentItem(arr) {
	departmentList.innerHTML = ''

	arr.forEach(function (element, index) {
		var item = document.createElement('div')
		console.log(element.title)
		item.innerHTML = `${element.title}`
		const departmentItem = departmentList.appendChild(item)
		departmentItem.className = 'dropdown-link-4 w-dropdown-link'
	})
	return departmentList
}

fetch('../data/data.json')
	.then(response => response.json())
	.then(json => {
		console.log(json)
		renderDepartmentItem(json.departments)
		// const departmentItem = departmentList.append(departments)
		// departmentItem.className = 'dropdown-link-4 w-dropdown-link'
	})
