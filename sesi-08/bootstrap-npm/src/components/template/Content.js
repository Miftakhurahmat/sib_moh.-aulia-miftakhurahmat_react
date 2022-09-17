import React from 'react'

const Content = () => {
	return (
		<>
			<div className='p-5 mb-4 bg-light rounded-3 border'>
				<div className='container-fluid py-5'>
					<h1 className='display-5 fw-bold'>First Paragraph in Jumbotron</h1>
					<p className='col-md-8 fs-4'>Using a Series of utilities, you can create this jumbotron just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
					<button className='btn btn-primary btn-lg' type='button' data-bs-toggle='modal' data-bs-target='#exampleModal'>
						Click here to show Modal box
					</button>
				</div>
			</div>

			{/* Modal */}
			<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					This is My first Modal
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
				</div>
			</div>
			</div>
		</>

	)
}

export default Content