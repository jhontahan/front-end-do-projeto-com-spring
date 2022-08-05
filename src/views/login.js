import React from "react"

import Card from '../components/card';

class Login extends React.Component{

    render(){
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={{position: 'relative', left: '300px'} }>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <div className="form-group">
                                                <label for></label>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
        )

    }

}

export default Login