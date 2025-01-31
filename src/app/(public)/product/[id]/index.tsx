/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { data } from "@/components/ProductList";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Shield, Truck, Package, Ruler, Weight, ShoppingCart, Zap, Gem, Sparkles } from "lucide-react";

const ProductDetailIndex = () => {
  const params = useParams();
  const productId = params.id;
  const product = data.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center text-2xl text-red-500 font-serif">Product not found!</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('/noise.png')]" />
      <div className="absolute -right-96 -top-96 w-[800px] h-[800px] bg-gradient-to-r from-gold-500/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto bg-slate-800/30 rounded-2xl shadow-2xl overflow-hidden p-10 flex flex-col md:flex-row gap-10 border border-gold-500/10 backdrop-blur-sm relative"
        >
          {/* Luxury Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -top-6 -right-6 z-20 flex items-center gap-2 bg-gradient-to-br from-gold-400 to-gold-600 text-slate-900 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-xl rotate-12"
          >
            <Sparkles size={18} className="shrink-0" />
            <span>Limited Edition</span>
          </motion.div>

          {/* Product Image Section */}
          <div className="w-full md:w-1/2 relative group">
            <motion.div
              whileHover="hover"
              className="relative h-[600px] w-full rounded-2xl overflow-hidden border-2 border-gold-500/20 bg-slate-700/20"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className="object-contain transform transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
              
              {/* Reflective floor effect */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gold-500/5 via-transparent to-transparent" />
              
              {/* Floating elements */}
              <motion.div
                variants={{ hover: { y: -10 } }}
                className="absolute top-4 left-4 flex gap-2"
              >
                <div className="bg-slate-900/80 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm border border-gold-500/20">
                  <Truck size={16} className="text-gold-500" />
                  <span className="text-gray-200">Free Shipping</span>
                </div>
                <div className="bg-slate-900/80 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm border border-gold-500/20">
                  <Shield size={16} className="text-gold-500" />
                  <span className="text-gray-200">2-Year Warranty</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-4 mt-6 px-2 overflow-x-auto scrollbar-hide">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-20 h-20 rounded-xl border-2 border-gold-500/20 bg-slate-700/40 cursor-pointer transition-all hover:border-gold-500/40 relative overflow-hidden"
                >
                  {item === 1 && (
                    <div className="absolute inset-0 bg-gold-500/10 animate-pulse" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* Title and Rating */}
            <div className="mb-8">
              <h1 className="text-5xl font-playfair font-bold text-gold-500 mb-4 relative leading-tight">
                {product.title}
                <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-gold-500 to-transparent rounded-full" />
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400/90 relative">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.3, y: -5 }}
                      className="relative p-1"
                    >
                      <Star size={24} fill="currentColor" />
                      {i === 4 && (
                        <span className="absolute -right-2 -top-2 text-xs bg-slate-900 px-1.5 rounded-full border border-gold-500/20">
                          +128
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 bg-slate-800/40 p-6 rounded-xl border border-gold-500/20"
            >
              <div className="flex items-end gap-4 flex-wrap">
                <div className="relative">
                  <span className="text-4xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                    $1,000,000
                  </span>
                  <div className="absolute -top-4 -right-4 rotate-12">
                    <div className="bg-emerald-600 text-xs px-2 py-1 rounded-full">
                      -16%
                    </div>
                  </div>
                </div>
                <span className="text-gray-400 line-through text-xl">$1,200,000</span>
              </div>
              <p className="text-gray-300/80 text-sm mt-3">
                Includes VIP concierge service & lifetime maintenance
              </p>
            </motion.div>

            {/* Product Description */}
            <p className="text-gray-300/90 text-lg mb-8 relative pl-6 border-l-2 border-gold-500/30 leading-relaxed font-light">
              {product.description}
              <Gem size={18} className="absolute -left-1 top-0 text-gold-500/50" />
            </p>

            {/* Action Buttons */}
            <div className="flex gap-5 mb-10">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-br from-gold-500 via-gold-500 to-gold-600 text-slate-900 py-5 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-gold-500/20 hover:shadow-gold-500/30 transition-all"
              >
                <ShoppingCart size={22} className="text-slate-900" />
                <span>Add to Collection</span>
              </motion.button>
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-slate-800/40 border-2 border-gold-500/30 text-gold-500 py-5 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:border-gold-500/50 hover:bg-slate-800/60 transition-all"
              >
                <Zap size={22} className="text-gold-500" />
                <span>Exclusive Purchase</span>
              </motion.button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: Shield, title: "Authenticity Guaranteed", desc: "Certified luxury materials" },
                { icon: Truck, title: "White Glove Delivery", desc: "Professional installation included" },
                { icon: Package, title: "Gift Packaging", desc: "Premium unboxing experience" },
                { icon: Sparkles, title: "VIP Services", desc: "Dedicated support team" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-slate-800/30 rounded-xl border border-gold-500/10 hover:border-gold-500/20 transition-colors"
                >
                  <item.icon size={24} className="text-gold-500 mb-2" />
                  <h4 className="font-semibold text-gold-500 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-300/80">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Specifications */}
            <div className="border-t border-gold-500/10 pt-8">
              <h3 className="text-2xl font-playfair font-bold text-gold-500 mb-6">
                Craftsmanship Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-3 bg-slate-800/40 rounded-lg">
                  <Ruler size={20} className="text-gold-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300/80 text-sm">Dimensions</p>
                    <p className="text-gold-500/90">10" × 5" × 3"</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-800/40 rounded-lg">
                  <Weight size={20} className="text-gold-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300/80 text-sm">Weight</p>
                    <p className="text-gold-500/90">2.5 lbs (1.13 kg)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-800/40 rounded-lg">
                  <Gem size={20} className="text-gold-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300/80 text-sm">Materials</p>
                    <p className="text-gold-500/90">18K Gold & Carbon Fiber</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-slate-800/40 rounded-lg">
                  <Sparkles size={20} className="text-gold-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300/80 text-sm">Finish</p>
                    <p className="text-gold-500/90">Hand-Polished Perfection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailIndex;