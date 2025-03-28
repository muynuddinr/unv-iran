import mongoose, { Schema } from 'mongoose';
import slugify from 'slugify';

export interface INavbarCategory {
  title: string;
  description: string;
  slug: string;
  status: 'Active' | 'Inactive';
  image?: string;
  parentCategory?: mongoose.Types.ObjectId;
  submenu?: Array<{
    name: string;
    link: string;
  }>;
  createdAt: Date;
  updatedAt: Date;
}

const NavbarCategorySchema = new Schema<INavbarCategory>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, trim: true },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    image: { type: String },
    parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'NavbarCategory' },
    submenu: [{
      name: { type: String, required: true },
      link: { type: String, required: true }
    }]
  },
  { timestamps: true }
);

// Pre-save hook to generate slug from title
NavbarCategorySchema.pre('save', function(next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const NavbarCategory = mongoose.models.NavbarCategory || mongoose.model<INavbarCategory>('NavbarCategory', NavbarCategorySchema);

export default NavbarCategory; 