'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
};

type MenuSection = {
  id: string;
  label: string;
  italianLabel: string;
  icon: string;
  items: MenuItem[];
};

const menuData: MenuSection[] = [
  {
    id: 'antipasti',
    label: 'Appetizers',
    italianLabel: 'Antipasti',
    icon: '🫒',
    items: [
      { name: 'Bruschetta al Pomodoro', description: 'Toasted artisan bread topped with fresh Roma tomatoes, basil, garlic, and extra virgin olive oil', price: '$9' },
      { name: 'Carpaccio di Manzo', description: 'Thinly sliced raw beef tenderloin with arugula, capers, shaved Parmigiano-Reggiano, and lemon vinaigrette', price: '$15' },
      { name: 'Calamari Fritti', description: 'Golden fried rings and tentacles of calamari served with house marinara and lemon aioli', price: '$14' },
      { name: 'Antipasto della Casa', description: "Chef's selection of imported Italian meats, aged cheeses, marinated olives, roasted peppers, and artichoke hearts", price: '$18' },
      { name: 'Cozze al Vino Bianco', description: 'Prince Edward Island mussels steamed in white wine, garlic, shallots, fresh herbs, and a touch of cream', price: '$16' },
      { name: 'Funghi Trifolati', description: 'Sautéed wild mushrooms with garlic, fresh thyme, white wine, and toasted crostini', price: '$12' },
      { name: 'Burrata e Prosciutto', description: 'Creamy fresh burrata with prosciutto di Parma, heirloom tomatoes, fresh basil, and aged balsamic', price: '$17' },
    ],
  },
  {
    id: 'zuppe',
    label: 'Soups & Salads',
    italianLabel: 'Zuppe & Insalate',
    icon: '🥗',
    items: [
      { name: 'Zuppa di Pesce', description: 'Traditional Southern Italian seafood soup with shrimp, clams, mussels, and fish in a spicy San Marzano tomato broth', price: '$16' },
      { name: 'Minestrone della Nonna', description: "Grandmother's hearty vegetable soup with seasonal vegetables, cannellini beans, and fresh pasta", price: '$10' },
      { name: 'Insalata Cesare', description: 'Crisp romaine hearts, house-made Caesar dressing, anchovy fillets, garlic croutons, and shaved Parmigiano', price: '$13', note: 'Add grilled chicken +$6 | Add shrimp +$8' },
      { name: 'Caprese Classica', description: 'Sliced fresh buffalo mozzarella, vine-ripened tomatoes, fresh basil, EVOO, and aged balsamic glaze', price: '$14' },
      { name: 'Insalata di Rucola', description: 'Baby arugula with shaved Parmigiano, pine nuts, sun-dried tomatoes, and lemon vinaigrette', price: '$12' },
      { name: 'Insalata Mista', description: 'Mixed seasonal greens with cucumbers, cherry tomatoes, Kalamata olives, and house Italian dressing', price: '$10' },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    italianLabel: 'I Primi',
    icon: '🍝',
    items: [
      { name: 'Spaghetti alla Carbonara', description: 'Egg-based Roman classic with guanciale, Pecorino Romano, and cracked black pepper — no cream', price: '$22' },
      { name: 'Pappardelle al Ragù', description: 'Hand-cut egg pasta ribbons with slow-braised wild boar ragù, rosemary, and Parmigiano-Reggiano', price: '$26' },
      { name: "Rigatoni all'Amatriciana", description: 'San Marzano tomatoes, guanciale, Pecorino Romano, and a pinch of chili — a Roman classic', price: '$21' },
      { name: 'Gnocchi al Gorgonzola', description: 'House-made potato gnocchi with creamy Gorgonzola dolce, toasted walnuts, and fresh sage', price: '$23' },
      { name: 'Linguine alle Vongole', description: 'Linguine with Manila clams, white wine, garlic, parsley, and extra virgin olive oil', price: '$25' },
      { name: 'Lasagna della Casa', description: 'Layers of house pasta, Bolognese meat sauce, béchamel, and Parmigiano — baked to golden perfection', price: '$24' },
      { name: 'Tagliatelle ai Funghi Porcini', description: 'Fresh tagliatelle with porcini mushrooms, truffle oil, cream, and Parmigiano-Reggiano', price: '$27' },
      { name: 'Orecchiette con Salsiccia', description: 'House-made ear-shaped pasta with Italian sausage, broccoli rabe, garlic, and Pecorino', price: '$23' },
      { name: "Penne all'Arrabbiata", description: 'Penne in a fiery San Marzano tomato sauce with garlic and Calabrian chilies', price: '$19' },
      { name: 'Spaghetti ai Frutti di Mare', description: 'Spaghetti with a medley of shrimp, scallops, mussels, and clams in a light tomato or white wine sauce', price: '$29' },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    italianLabel: 'Pizza al Forno',
    icon: '🍕',
    items: [
      { name: 'Margherita DOC', description: 'San Marzano tomatoes, fresh buffalo mozzarella, fresh basil, extra virgin olive oil', price: '$18' },
      { name: 'Pizza Diavola', description: 'San Marzano tomatoes, fior di latte, spicy Calabrian salami, Kalamata olives, chili flakes', price: '$21' },
      { name: 'Pizza ai Quattro Formaggi', description: 'Fior di latte, Gorgonzola, smoked provolone, and Parmigiano-Reggiano', price: '$22' },
      { name: 'Pizza Prosciutto e Rucola', description: 'Tomato base, mozzarella, prosciutto di Parma, fresh arugula, shaved Parmigiano, lemon drizzle', price: '$23' },
      { name: 'Pizza Vegetariana', description: 'Tomato base, mozzarella, grilled zucchini, roasted peppers, artichoke hearts, sun-dried tomatoes, basil', price: '$20' },
      { name: 'Pizza Capricciosa', description: 'Tomato base, mozzarella, prosciutto cotto, mushrooms, artichokes, and Kalamata olives', price: '$22' },
      { name: 'Pizza Truffle & Funghi', description: 'White base, fior di latte, mixed wild mushrooms, truffle oil, fresh thyme, and Parmigiano', price: '$25' },
    ],
  },
  {
    id: 'secondi',
    label: 'Entrées',
    italianLabel: 'I Secondi',
    icon: '🥩',
    items: [
      { name: 'Osso Buco alla Milanese', description: 'Braised veal shank in white wine, vegetables, and gremolata, served with saffron risotto', price: '$38' },
      { name: 'Bistecca alla Fiorentina', description: '14oz USDA Prime T-bone grilled over hardwood, finished with rosemary, garlic, and EVOO', price: '$52' },
      { name: 'Vitello Piccata', description: 'Pan-seared veal scaloppini in a bright lemon-caper-white wine sauce with caperberries', price: '$32' },
      { name: 'Vitello Marsala', description: 'Tender veal scaloppini with Marsala wine sauce and cremini mushrooms', price: '$32' },
      { name: 'Pollo al Limone', description: 'Free-range chicken breast sautéed with lemon, capers, white wine, and fresh parsley', price: '$28' },
      { name: 'Salmone alla Griglia', description: 'Grilled Atlantic salmon with lemon-herb crust, sautéed spinach, and cherry tomato relish', price: '$34' },
      { name: 'Branzino al Forno', description: 'Whole roasted European sea bass with fennel, lemon, olives, and Sicilian capers', price: '$38' },
      { name: 'Gamberoni alla Piastra', description: 'Jumbo shrimp grilled with garlic, white wine, lemon, and Calabrian chili butter', price: '$35' },
      { name: 'Agnello al Rosmarino', description: 'Rack of lamb marinated in rosemary, garlic, and Dijon, roasted to perfection, with roasted root vegetables', price: '$45' },
    ],
  },
  {
    id: 'dolci',
    label: 'Desserts',
    italianLabel: 'Dolci',
    icon: '🍮',
    items: [
      { name: 'Tiramisù Classico', description: 'Our legendary house recipe — espresso-soaked Savoiardi, mascarpone cream, dark cocoa', price: '$10' },
      { name: 'Panna Cotta', description: 'Silky vanilla bean panna cotta with seasonal berry compote and candied citrus', price: '$9' },
      { name: 'Cannolo Siciliano', description: 'House-made crispy shells filled with sweet ricotta, candied orange peel, and pistachios', price: '$9' },
      { name: 'Torta di Cioccolato', description: 'Warm dark chocolate lava cake with vanilla gelato and fresh raspberries', price: '$11' },
      { name: 'Gelato della Casa', description: "Chef's daily selection of house-made Italian gelato — ask your server for today's flavors", price: '$8' },
      { name: 'Affogato', description: 'Vanilla gelato "drowned" in a double shot of house espresso', price: '$9' },
      { name: 'Torta della Nonna', description: 'Traditional Italian custard tart with pine nuts and powdered sugar', price: '$10' },
    ],
  },
  {
    id: 'bevande',
    label: 'Drinks',
    italianLabel: 'Bevande',
    icon: '🍷',
    items: [
      { name: 'Chianti Classico DOCG', description: 'Tuscany — cherry, leather, dried herbs. Medium-bodied and beautifully balanced', price: '$12 / $44' },
      { name: 'Barolo DOCG', description: 'Piedmont — tar, roses, dark fruit. The "King of Italian Wines"', price: '$18 / $68' },
      { name: 'Pinot Grigio delle Venezie', description: 'Veneto — crisp, mineral, green apple. Light and refreshing', price: '$10 / $38' },
      { name: 'Prosecco di Valdobbiadene', description: 'Veneto — fine bubbles, pear, white flower. Perfect aperitivo', price: '$10 / $38' },
      { name: 'Aperol Spritz', description: 'Aperol, Prosecco, soda, and fresh orange', price: '$13' },
      { name: 'Negroni Classico', description: 'Campari, sweet vermouth, gin — stirred, not shaken', price: '$14' },
      { name: 'Espresso', description: 'Single or double shot of our house Italian roast', price: '$4' },
      { name: 'Cappuccino', description: 'Espresso, steamed milk, and velvety foam', price: '$6' },
    ],
  },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('antipasti');

  const activeSection = menuData.find((s) => s.id === activeTab)!;

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative"
        style={{ background: 'linear-gradient(160deg, #2C1810 0%, #1A1A1A 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 50% 50%, #C9A84C 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="tracking-[0.4em] text-xs uppercase mb-4" style={{ color: '#C9A84C' }}>Il Nostro Menù</p>
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold mb-6" style={{ color: '#F5F0E8' }}>
            Our Menu
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
            <span className="text-xl" style={{ color: '#C9A84C' }}>✦</span>
            <div className="h-px w-24" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
          </div>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'rgba(245,240,232,0.6)' }}>
            All of our pasta is made fresh in-house daily. We use only the finest imported
            Italian ingredients alongside locally sourced seasonal produce.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="sticky z-40" style={{ backgroundColor: '#1A1A1A', borderBottom: '1px solid rgba(201,168,76,0.2)', top: '60px' }}>
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {menuData.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className="px-5 py-4 text-xs tracking-widest uppercase transition-all duration-300 whitespace-nowrap"
                style={{
                  color: activeTab === section.id ? '#C9A84C' : 'rgba(245,240,232,0.5)',
                  borderBottom: activeTab === section.id ? '2px solid #C9A84C' : '2px solid transparent',
                }}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 min-h-screen" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-12">
                <p className="font-playfair italic text-xl mb-1" style={{ color: '#C9A84C' }}>{activeSection.italianLabel}</p>
                <h2 className="font-playfair text-4xl font-bold" style={{ color: '#2C1810' }}>{activeSection.label}</h2>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="h-px w-20" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
                  <span style={{ color: '#C9A84C' }}>✦</span>
                  <div className="h-px w-20" style={{ backgroundColor: 'rgba(201,168,76,0.4)' }} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {activeSection.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="p-6 transition-colors duration-200 hover:bg-white"
                    style={{ borderBottom: '1px solid rgba(201,168,76,0.1)', borderLeft: '1px solid rgba(201,168,76,0.1)' }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-playfair text-lg font-semibold" style={{ color: '#2C1810' }}>{item.name}</h3>
                      <span className="font-playfair text-lg font-semibold whitespace-nowrap" style={{ color: '#C9A84C' }}>{item.price}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{item.description}</p>
                    {item.note && (
                      <p className="text-xs mt-2 italic" style={{ color: '#C9A84C' }}>{item.note}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom note */}
          <div className="mt-16 text-center p-8 bg-white" style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
            <p className="font-playfair italic text-lg mb-2" style={{ color: '#2C1810' }}>
              &ldquo;La buona cucina è fatta di pochi ingredienti di grande qualità.&rdquo;
            </p>
            <p className="text-sm" style={{ color: '#6B6B6B' }}>
              &ldquo;Good cooking is made from a few ingredients of great quality.&rdquo; — Italian proverb
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:6302323322"
                className="inline-block text-sm tracking-widest uppercase px-8 py-3 border transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#8B1A1A', color: '#F5F0E8', borderColor: '#C9A84C' }}
              >
                Reserve a Table
              </a>
              <p className="text-xs flex items-center justify-center" style={{ color: 'rgba(107,107,107,0.6)' }}>
                Menu items and prices subject to change. Please inform your server of any dietary restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
