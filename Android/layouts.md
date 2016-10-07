# Android Layouts

1. [FrameLayout](#framelayout)
2. [LinearLayout](#linearlayout)
3. [TableLayout](#tablelayout)
4. [GridLayout](#gridlayout)
5. [RelativeLayout](#relativelayout)
6. [ScrollView](#scrollview)
7. [CoordinatorLayout](#coordinatorlayout)
8. [ConstraintLayout] (#constraintlayout)

---
##FrameLayout

---

## LinearLayout

---

## TableLayout
Table Row is always MATCH_PARENT in width and WRAP_CONTENT in height.

Number of columns in the TableLayout is decided by the Table Row having maximum Views.

Column width automatically adjusts based on the size of the column with maximum width.


| Attribute | Apply to | What does it do ? | What values can it have? |
| --------- | -------- | ----------------- | ------------------------ |
| `android:stretchColumns` | TableLayout | Stretch either 1 column or a set of columns or all columns [ Column Indices start with 0] | `android:stretchColumns="0"` `android:stretchColumns="1,2"` `android:stretchColumns="*"` |
| `android:shrinkColumns` | TableLayout | Remove unnecessary extra space from a column and shrink it [Column Indices start with 0] | `android:shrinkColumns="0"` `android:shrinkColumns="1,2"` `android:shrinkColumns="*"` |
| `android:layout_span` | Any child View inside Table Row | Makes that View span multiple columns specified by the number in layout_span | `android:layout_span="2"` Make this View 2 columns wide |
| `android:layout_column` | Any child View inside Table Row | The index of the column inside which this child View should appear |  `android:layout_column="2"` Make this View appear inside the column with index 2 |
| `android:collapseColumns` | TableLayout | The index of the columns that you want to hide | `android:collapseColumns="2"` Hide the column whose index=2 |

---

## GridLayout

---

## RelativeLayout

---

## ScrollView

``` xml
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fillViewport="true">
    
    <!-- Include layout -->
    
</ScrollView>
```
---
## CoordinatorLayout
CoordinatorLayout è un “super-powered” FrameLayout, the super power of this layout is the ability to coordinate dependencies between child views.
All you need to do is to wrap views inside CoordinatorLayout.
CoordinatorLayout extends the ability to accomplish many of the Google's Material Design scrolling effects.
Currently, there are several ways provided in this framework that allow it to work without needing to write your own custom animation code. These effects include:

* Sliding the Floating Action Button up and down to make space for the Snackbar.
![alt text](http://imgur.com/zF9GGsK.gif)

* Expanding or contracting the Toolbar or header space to make room for the main content.
![alt text](http://imgur.com/X5AIH0P.gif)

* Controlling which views should expand or collapse and at what rate, including parallax scrolling effects animations.
![alt text](http://imgur.com/1JHP0cP.gif)

---
## ConstraintLayout
###  When creating constraints, remember the following rules:

1. Every view must have at least two constraints: one horizontal and one vertical.

2. You can create constraints only between a constraint handle and an anchor point that share the same plane. So a vertical plane (the left and right sides) of a view can be constrained only to another vertical plane; and baselines can constrain only to other baselines.

3. Each constraint handle can be used for just one constraint, but you can create multiple constraints (from different views) to the same anchor point.

When you add a constraint to a view, you will see in the property section, the view attributes. You can edit your view properties in XML code but it is preferable to use the property window. There is a link below – view all properties. If the view property you want to edit is not visible then click on the link to see all the properties.

