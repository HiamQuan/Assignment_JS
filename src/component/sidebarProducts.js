const SideProducts = {
  print() {
    return/* html */ `
<section aria-labelledby="products-heading" class="pb-24">
<h2 id="products-heading" class="text-3xl font-medium text-gray-800">Danh mục sản phẩm</h2>
<div class="grid grid-rows-1">
    <!-- Filters -->
    <form id="filter-section-search">
        <div class=" form-search pt-6" >
            <div class="flex w-full justify-start">
                <div class="mb-3 xl:w-80">
                    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                        <input type="search" id="formSearch" class=" form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2">
                    </div>
                </div>
            </div>
        </div>
    </form>


<form class="hidden lg:block flex flex-col" id="filter">
    
        <div class="pt-6" id="filter-section-1">
            <div class="border-b border-gray-200 py-6">
                <div class="space-y-4">
                    <div class="flex items-center">
                        <input id="filter-category" name="category" value="fe" type="radio" class="category h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-category" class="ml-3 text-sm text-gray-600"> Front End </label>
                    </div>
                <div class="flex items-center">
                    <input id="filter-category" name="category" value="be" type="radio" class="category h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="filter-category" class="ml-3 text-sm text-gray-600"> Back End </label>
                </div>
            </div>
        </div>



        <!-- Filter section, show/hide based on section state. -->
            <div class="pt-6" id="filter-section-2">
                <div class="border-b border-gray-200 py-6 w-full">
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <input id="filter-price" name="size[]" value="20" type="checkbox" class="filter-price h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                            <label for="filter-price" class="ml-3 text-sm text-gray-600"> $20 </label>
                        </div>

                        <div class="flex items-center">
                            <input id="filter-price" name="size[]" value="30" type="checkbox" class="filter-price h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                            <label for="filter-price" class="ml-3 text-sm text-gray-600"> $30 </label>
                        </div>

                        <div class="flex items-center">
                            <input id="filter-price" name="size[]" value="40" type="checkbox" class="filter-price h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                            <label for="filter-price" class="ml-3 text-sm text-gray-600"> $40 </label>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" id="filter-btn" class="my-5 block px-4 py-2 rounded-lg bg-indigo-500 text-white hover:text-gray-200 cursor-pointer"> Lọc </button>
    </form>
</div>
</section>`;
  },
};

export default SideProducts;
