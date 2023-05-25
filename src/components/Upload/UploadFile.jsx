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
    <div className='container'>
        <div class="px-4 py-5 my-5 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="currentColor" class="bi bi-amd" viewBox="0 0 16 16">
                <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z"/>
            </svg>
            <h1 class="display-5 fw-bold text-body-emphasis fs-3 my-3">Automate Certificate</h1>
                <div class="col-lg-6 mx-auto" style={{ width: '60rem' }} >
                    <p class="lead fs-5 mb-4">Automate your name with Certificate and certificate theme</p>
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