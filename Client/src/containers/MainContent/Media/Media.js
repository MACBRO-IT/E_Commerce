import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import Dropzone from 'react-dropzone';


class Media extends Component
{
    
    constructor(props) {
        super(props);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
        
        this.state = { selectedFiles: []  }
        }
        
        handleAcceptedFiles = (files) => {
        files.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: this.formatBytes(file.size)
        }));
        
        this.setState({ selectedFiles: files });
        }
        
        /**
        * Formats the size
        */
        formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        }
        
  
 
render(){
    const data = {
        columns: [
      
          {
            label: 'ID',
            field: 'ID',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Thumbnail',
            field: 'Thumbnail',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Filename',
            field: 'Filename',
            sort: 'asc',
            width: 270
          },
        
          {
            label: 'Created',
            field: 'Created',
            sort: 'asc',
            width: 270
          },
        
        ],
        rows: [
        
            {
                
                ID: '40',
                Thumbnail: 'Image.png',
                Filename:'Active',
                Created: '3 days ago'
              },
             
              {
                
                ID: '40',
                Thumbnail: 'Image.png',
                Filename:'Active',
                Created: '3 days ago'
              },
              {
                
                ID: '40',
                Thumbnail: 'Image.png',
                Filename:'Active',
                Created: '3 days ago'
              },
              {
                
                ID: '40',
                Thumbnail: 'Image.png',
                Filename:'Active',
                Created: '3 days ago'
              },
              {
                
                ID: '40',
                Thumbnail: 'Image.png',
                Filename:'Active',
                Created: '3 days ago'
              },
       
        ]
      };
    return(
           <AUX>
		     <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">

                                <section>
                                   <Dropzone onDrop={acceptedFiles => this.handleAcceptedFiles(acceptedFiles)}>
                                        {({ getRootProps, getInputProps }) => (
                                        <div className="dropzone">
                                        <div className="dz-message needsclick" {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <i className="h1 text-muted dripicons-cloud-upload"></i>
                                        <h3>Drop files here or click to upload.</h3>
                                        </div>
                                        </div>
                                        )}
                                        </Dropzone>
                                                                                
                                        <div className="dropzone-previews mt-3" id="file-previews">
                                        {this.state.selectedFiles.map((f, i) => {
                                        return <Card className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete" key={i + "-file"}>
                                        <div className="p-2">
                                        <Row className="align-items-center">
                                        <Col className="col-auto">
                                        <img data-dz-thumbnail="" className="avatar-sm rounded bg-light" alt={f.name} src={f.preview} />
                                        </Col>
                                        <Col className="pl-0">
                                        <Link to="#" className="text-muted font-weight-bold">{f.name}</Link>
                                        <p className="mb-0"><strong>{f.formattedSize}</strong></p>
                                        </Col>
                                        </Row>
                                        </div>
                                        </Card>
                                        })}
                                        </div>
                                </section>


                                <div className="page-content-wrapper">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <div className="card m-b-20">
                            <div className="card-body">
                            {/* <Link to="/AddPages"   className="btn btn-primary float-right">Add Page</Link>  */}

                                <MDBDataTable
                                           striped
                                            bordered
                                            hover
                                            data={data}
                                            />
                            </div>
                        </div>
                    </div>
                </div> 

              </div></div>

                                {/* <div className="text-center m-t-15">
                                    <button type="button" className="btn btn-primary waves-effect waves-light">Send Files</button>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
           </AUX>
        );
    }
}

export default Media;   