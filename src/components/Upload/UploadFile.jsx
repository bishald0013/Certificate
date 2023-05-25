import React from 'react'

function UploadFile() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const formData = {
            csvFile: data.get('fileCSV'),
        };
        console.log(formData);
    }

  return (
    <div className='container' style={{marginTop: '-3rem'}} >
        <div class="px-4 py-5 my-5 text-center">
            <h1 class="display-5 fw-bold text-body-emphasis fs-2 my-3">Explore the world's leading<br></br> Certificate generator</h1>
                <div class="col-lg-6 mx-auto" style={{ width: '60rem' }} >
                    <p class="lead fs-5 mb-4">Millions of designers and agencies around the world showcase their portfolio work <br></br> on Paper Thoughts - the home to the world’s best design and creative professionals.</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <form onSubmit={handleSubmit} action="">
                            <div class="input-group input-group-lg mb-3">
                                <input type="file" style={{ width: '40rem' }}  accept='.csv' name='fileCSV' class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                <button type='submit' class="btn btn-outline-secondary" id="inputGroupFileAddon04">Submit</button>
                            </div>
                            </form>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default UploadFile