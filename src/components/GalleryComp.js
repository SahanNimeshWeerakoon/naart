import React, { useState, useCallback } from "react";
import { Tabs, Tab, Container } from 'react-bootstrap';
import LightBox from "./gallery/LightBox";

function GalleryComp() {

  const portraits = [
      {
        src: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=353&q=80',
        width: 1,
        height: 1.6
      },
      {
        src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
        width: 1,
        height: 1
      },
      {
        src: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80',
        width: 1.3,
        height: 1
      },
      {
        src: 'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        width: 1.3,
        height: 1
      },
      {
        src: 'https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
        width: 1,
        height: 1.7
      },
      {
        src: 'https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=830&q=80',
        width: 1.3,
        height: 1
      },
  ];
  const crafts = [
    {
      src: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      width: 1.3,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1512218946813-fb770726f07e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      width: 1.3,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/flagged/photo-1554575316-e3194e855ed1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      width: 1.3,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1561387543-fdfaf21e4194?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1570183581653-ca183c6e0f60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      width: 1.3,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1570183581653-ca183c6e0f60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      width: 1.3,
      height: 1
    },
  ];

  return (
    <div className="gallery mt-5 mb-5">
        <Container>
            <h2>Gallery</h2>
            <Tabs defaultActiveKey="portraits" id="uncontrolled-tab-example">
                <Tab eventKey="portraits" title="Portraits" className="border">
                  <LightBox photos={portraits} />
                </Tab>
                <Tab eventKey="crafts" title="Crafts" className="border">
                  <LightBox photos={crafts} />
                </Tab>
            </Tabs>
        </Container>
    </div>
  );
}

export default GalleryComp
