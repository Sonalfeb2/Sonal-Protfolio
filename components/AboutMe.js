const AboutMe = () =>{
    return (
        <Jumbotron id="aboutme" className="m-0">
        <div className="container row">
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-secondary rounded-circle"
                src="../public/logo.png"
                alt="profilepicture"
                width="auto"
                height="auto"
              />
            )}
          </div>
          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2 className="display-4 mb-5 text-center">About Me</h2>
            <p className="lead text-center">Hi</p>
            
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href="https://drive.google.com/file/d/1m1JEHuimlvxij9rR8rdQvfOXseTNxg4d/view"
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            
          </div>
        </div>
      </Jumbotron>
    )
}