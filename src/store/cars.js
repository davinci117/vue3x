import { ref } from 'vue'
export default {
  state: {
    tableData: ref(
      [
        { id: '001', name: '比亚迪-汉', price: 219800, count: 12215 },
        { id: '002', name: '比亚迪-唐', price: 282800, count: 8890 },
        { id: '003', name: '比亚迪-秦', price: 99800, count: 14185 },
        { id: '004', name: '比亚迪-元', price: 139800, count: 23231 },
        { id: '005', name: '比亚迪-宋', price: 140800, count: 14617 },
      ]
    )
  }
}