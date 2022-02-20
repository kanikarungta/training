import { sites } from './../constants/sites';

function SiteList() {
  return (
    <div className='list'>
      <h4>Existing Sites List</h4>

      {
        sites.map((site) => { 
          return (
            <div
              className={`single-site ${site.isSelected === true ? 'checked' : ''}`}
            >
              {site.name}
            </div>
          )
        })
      }
    </div>
  )
}

export default SiteList;


// if (condition === true ){

// }  else {

// }

// ?: -- ternary
//  condition ? true : false

//  site.isSelected === true ? 'checked' : ''


//  string interpolation 

//  `dkfjkdfjksdjfkdsjf ${}`
//  ''
// ""
