import _ from 'lodash'
import getLink from './assets.js'

export default function prepare(product) {
  let item = _.cloneDeep(product);
  _.set(item, "name", item.label || `${item.manufacturer} ${item.model}`)
  _.update(item, "preview.id", getLink)
  _.update(item, "images", (images) => {
    if (_.size(images) > 0) {
      return _.map(images, image => getLink(image.directus_files_id.id))
    }
  })
  return item
}
