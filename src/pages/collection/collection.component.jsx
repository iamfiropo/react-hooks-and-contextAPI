import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

/**
 * 
 * @param {*} param0 
 * A more simpler way of leveraging context API with useContext hook
 */
const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId]
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

/**
 * Another way to leverage context API by wrapping the component inside powered component
 * and access it's Consumer function
 * @param {*} param0 
 * 
   const CollectionPage = ({ match }) => {
     return (
       <CollectionsContext.Consumer>
         {
           collections => {
             const collection = collections[match.params.collectionId]
             const { title, items } = collection;
             return (
               <div className='collection-page'>
                 <h2 className='title'>{title}</h2>
                 <div className='items'>
                   {items.map(item => (
                     <CollectionItem key={item.id} item={item} />
                   ))}
                 </div>
               </div>
             )
           }
         }
       </CollectionsContext.Consumer>
     );
   };

 */

export default CollectionPage;
