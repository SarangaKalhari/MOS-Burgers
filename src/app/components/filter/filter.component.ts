import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Output() filterChanged = new EventEmitter<any>();

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
        { label: 'Burgers', value: 'electronics' },
        { label: 'Beverages', value: 'fashion' },
        { label: 'Appertizers', value: 'home' },
        { label: 'Desserts', value: 'toys' }
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
        { label: 'Low of Stock', value: 'preorder' }
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
  // removeChip(filterName: string) {
  //   const filter = this.filters.find(f => f.name === filterName);
  //   if (filter) {
  //     filter.selectedValue = null;
  //     filter.selectedLabel = null;
  //     this.updateChips();
  //   }
  // }

  // 'Apply' button එක එබූ විට සිදුවිය යුතු දේ
  applyFilters() {
    const selectedData = {
      search: this.searchQuery,
      category: this.filters.find(f => f.name === 'category')?.selectedValue,
      status: this.filters.find(f => f.name === 'status')?.selectedValue
    };

    // Parent component එකට දත්ත යවන්න
    this.filterChanged.emit(selectedData);
  }

  // Chip එකක් ඉවත් කළ විටද table එක update වීමට මෙය එක් කරන්න
  removeChip(filterName: string) {
    const filter = this.filters.find(f => f.name === filterName);
    if (filter) {
      filter.selectedValue = null;
      filter.selectedLabel = null;
      this.updateChips();
      this.applyFilters(); // Auto-apply filters after removing chip
    }
  }
}
