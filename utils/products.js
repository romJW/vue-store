import _ from 'lodash'
import getLink from '../utils/assets.js'

export default function prepare(product) {
  let item = _.cloneDeep(product);
  _.set(item, "name", item.label || `${item.manufacturer} ${item.model}`)
  _.update(item, "preview.id", getLink)
  _.update(item, "images", (images) => {
    return _.map(images, e => {
      if (e.directus_files_id) {
        return { directus_files_id: { id: getLink(e.directus_files_id.id) }}
      }
    })
  })
  return item
}
