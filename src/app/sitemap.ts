import { MetadataRoute } from 'next'
import connectDB from '@/lib/mongodb'
import NavbarCategory from '@/models/NavbarCategory'
import Category from '@/models/Category'
import SubCategory from '@/models/SubCategory'
import Product from '@/models/Product'
import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types'
import { Videos } from 'next/dist/lib/metadata/types/metadata-types'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB()
  
  // Base URL for the site
  const baseUrl = 'https://unv-iran.com'
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // About page
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Contact page
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Industry solutions
    {
      url: `${baseUrl}/building`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/retail`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bank`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/school`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shopping-mall`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hospital`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/warehouse`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stadium`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hotel`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Solutions pages
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/smart-Intrusion-Prevention`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Support pages

    // Legal pages
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
  
  // Dynamic routes from database
  // 1. Get all active navbar categories
  const navbarCategories = await NavbarCategory.find({ status: 'Active' })
  
  // 2. Create sitemap entries for navbar categories
  const navbarCategoryRoutes = navbarCategories.map((category) => ({
    url: `${baseUrl}/${category.slug}`,
    lastModified: category.updatedAt || new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  
  // 3. Get all categories and create routes
  let categoryRoutes: MetadataRoute.Sitemap = []
  for (const navbarCategory of navbarCategories) {
    const categories = await Category.find({ 
      navbarCategory: navbarCategory._id, 
      status: 'Active' 
    })
    
    const routes = categories.map((category) => ({
      url: `${baseUrl}/${navbarCategory.slug}/${category.slug}`,
      lastModified: category.updatedAt || new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    }))
    
    categoryRoutes = [...categoryRoutes, ...routes] as MetadataRoute.Sitemap
  }
  
  // 4. Get all subcategories and create routes
  let subcategoryRoutes: { url: string; lastModified?: string | Date | undefined; changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" | undefined; priority?: number | undefined; alternates?: { languages?: Languages<string> | undefined } | undefined; images?: string[] | undefined; videos?: Videos[] | undefined }[] = []
  for (const navbarCategory of navbarCategories) {
    const categories = await Category.find({ 
      navbarCategory: navbarCategory._id, 
      status: 'Active' 
    })
    
    for (const category of categories) {
      const subcategories = await SubCategory.find({ 
        category: category._id,
        status: 'Active'
      })
      
      const routes = subcategories.map((subcategory) => ({
        url: `${baseUrl}/${navbarCategory.slug}/${category.slug}/${subcategory.slug}`,
        lastModified: subcategory.updatedAt || new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      }))
      
      subcategoryRoutes = [...subcategoryRoutes, ...routes] as unknown as MetadataRoute.Sitemap
    }
  }
  
  // 5. Get all products and create routes
  let productRoutes: MetadataRoute.Sitemap = []
  for (const navbarCategory of navbarCategories) {
    const categories = await Category.find({ 
      navbarCategory: navbarCategory._id, 
      status: 'Active' 
    })
    
    for (const category of categories) {
      const subcategories = await SubCategory.find({ 
        category: category._id,
        status: 'Active'
      })
      
      for (const subcategory of subcategories) {
        const products = await Product.find({ 
          subcategory: subcategory._id,
          status: 'Active'
        })
        
        const routes = products.map((product) => ({
          url: `${baseUrl}/${navbarCategory.slug}/${category.slug}/${subcategory.slug}/${product.slug}`,
          lastModified: product.updatedAt || new Date(),
          changeFrequency: 'monthly',
          priority: 0.4,
        }))
        
        productRoutes = [...productRoutes, ...routes] as MetadataRoute.Sitemap
      }
    }
  }
  
  // Combine all routes
  return [...[
    ...staticRoutes,
    ...navbarCategoryRoutes,
    ...categoryRoutes,
    ...subcategoryRoutes,
    ...productRoutes,
  ]
] as MetadataRoute.Sitemap;
}