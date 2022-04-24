import _ from 'lodash'
import { graphql, buildSchema } from 'graphql';

export const actions = {
  list (_ , { filter = {} }) {
    const params = {
      filter: {
        status: { _eq: 'published' },
        ...filter,
      }
    }
    return this.$axios.get('/items/products', { params })
  },
  async get (_, { id }) {
    const product = await this.$axios.get(`/items/products/${id}`, {
      params: {
        filter: {
          status: { _eq: 'published' }
        }
      }
    })
    product.preview = getAssetUrl(product.preview)
    product.images = _.map(images, e => getAssetUrl(e.directus_files_id))
    return product
  }
}

