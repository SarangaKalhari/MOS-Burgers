import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  searchQuery: string = '';
  activeDropdown: string | null = null;

  // Filter දත්ත සැකසුම
  filters = [
    {
      name: 'category',
      label: 'Category',
      selectedValue: null as string | null,
      selectedLabel: null as string | null,
      items: [
        { label: 'Electronics', value: 'electronics' },
        { label: 'Fashion', value: 'fashion' },
        { label: 'Home & Garden', value: 'home' },
        { label: 'Toys', value: 'toys' }
      ]
    },
    {
      name: 'status',
      label: 'Status',
      selectedValue: null as string | null,
      selectedLabel: null as string | null,
      items: [
        { label: 'In Stock', value: 'instock' },
        { label: 'Out of Stock', value: 'outofstock' },
        { label: 'Pre-order', value: 'preorder' }
      ]
    }
  ];

  // දැනට තෝරාගෙන ඇති items (Chips සඳහා)
  allSelected: any[] = [];

  // Dropdown එක විවෘත කිරීමට හෝ වැසීමට
  toggleDropdown(filterName: string) {
    this.activeDropdown = this.activeDropdown === filterName ? null : filterName;
  }

  // එක අගයක් පමණක් තෝරාගැනීමේ Logic එක
  selectSingleItem(filterName: string, item: any) {
    const filter = this.filters.find(f => f.name === filterName);
    
    if (filter) {
      // දැනටමත් තෝරා ඇති එකම නැවත click කළහොත් එය ඉවත් කරන්න (Deselect)
      if (filter.selectedValue === item.value) {
        filter.selectedValue = null;
        filter.selectedLabel = null;
      } else {
        // අලුත් අගයක් තෝරාගන්න
        filter.selectedValue = item.value;
        filter.selectedLabel = item.label;
      }
      
      this.activeDropdown = null; // Selection එකෙන් පසු dropdown එක වසන්න
      this.updateChips();
    }
  }

  // පහළ පෙනෙන Chips update කරන ආකාරය
  updateChips() {
    this.allSelected = this.filters
      .filter(f => f.selectedValue !== null)
      .map(f => ({
        filterName: f.name,
        label: f.selectedLabel,
        value: f.selectedValue
      }));
  }

  // Chip එකේ ඇති 'X' ලකුණ එබූ විට ඉවත් කිරීම
  removeChip(filterName: string) {
    const filter = this.filters.find(f => f.name === filterName);
    if (filter) {
      filter.selectedValue = null;
      filter.selectedLabel = null;
      this.updateChips();
    }
  }

  // 'Apply' button එක එබූ විට සිදුවිය යුතු දේ
  applyFilters() {
    const selectedData = {
      search: this.searchQuery,
      filters: this.filters.map(f => ({
        name: f.name,
        value: f.selectedValue
      }))
    };
    
    console.log('Applying Filters:', selectedData);
    // මෙහිදී ඔබට service එකක් හරහා API එකට දත්ත යැවිය හැක.
  }
}
