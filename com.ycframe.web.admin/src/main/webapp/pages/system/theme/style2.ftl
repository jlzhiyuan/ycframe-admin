.el-button--primary {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
}
.el-radio__input.is-checked .el-radio__inner {
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
    <#if primaryColor??>background: ${primaryColor!''};</#if>
}
.el-radio__inner:hover {
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
}
.el-radio__input.is-checked+.el-radio__label {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-radio-button__orig-radio:checked+.el-radio-button__inner {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
    <#if primaryColor??>-webkit-box-shadow: -1px 0 0 0 ${primaryColor!''};</#if>
    <#if primaryColor??>box-shadow: -1px 0 0 0 ${primaryColor!''};</#if>
}
.el-radio-button__inner:hover {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
}
.el-checkbox__inner:hover {
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
}
.el-checkbox__input.is-checked+.el-checkbox__label {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-checkbox-button.is-checked .el-checkbox-button__inner {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
}
.el-checkbox-button__inner:hover {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-select .el-input__inner:focus {
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
}

.el-cascader .el-input .el-input__inner:focus, .el-cascader .el-input.is-focus .el-input__inner {
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
}
.el-cascader-node.in-active-path, .el-cascader-node.is-active, .el-cascader-node.is-selectable.in- checked-path {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-input.is-active .el-input__inner, .el-input__inner:focus {
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
}
.el-time-panel__btn.confirm {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-date-table td.today span {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-date-picker__header-label.active, .el-date-picker__header-label:hover {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-switch.is-checked .el-switch__core {
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
}
.el-switch__label.is-active {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-button--primary.is-plain:focus, .el-button--primary.is-plain:hover {
    <#if primaryColor??>background: ${primaryColor!''};</#if>
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
}
.el-loading-spinner .path {
    <#if primaryColor??>stroke: ${primaryColor!''};</#if>
}
el-loading-spinner .el-loading-text {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-tabs__item:hover {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-tabs__item.is-active {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-tabs__active-bar {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-step__head.is-finish {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
}
.el-step__title.is-finish {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-step__description.is-finish {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-pager li.active {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}

.el-pager li:hover {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-tag {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
    opacity: 0.6;
    font-size: 12px;
    color: #FFFFFF;
}
.el-badge__content--primary {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
}
.el-button--primary:focus, .el-button--primary:hover {
    <#if primaryColor??>background: ${primaryColor!''};</#if>
    opacity: 0.8;
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
}

.page-header {    
<#if primaryColor??>background-color: ${primaryColor!''};</#if>
}

  
 
.el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover {
   <#if primaryColor??> background-color:${primaryColor!''};</#if>
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
    opacity: 0.7;
}

.el-button--text {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-select .el-input.is-focus .el-input__inner {
    <#if primaryColor??>border-color: ${primaryColor!''};</#if>
}
.el-date-table td.current:not(.disabled) span {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
}
.el-button--text {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}
.el-loding-spinner .el-loading-text {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
    margin: 3px 0;
    font-size: 14px;
}
.el-loading-spinner i {
    <#if primaryColor??>color: ${primaryColor!''};</#if>
}

.el-button--success {
    color: #FFF;
    <#if successColor??>background-color: ${successColor!''};</#if>
    <#if successColor??>border-color: ${successColor!''};</#if>
}
.el-button--success:focus, .el-button--success:hover {
    <#if successColor??>background: ${successColor!''};</#if>
    <#if successColor??>border-color: ${successColor!''};</#if>
    opacity: 0.8;
    color: #FFF;
}
.el-button--success.is-disabled, .el-button--success.is-disabled:active, .el-button--success.is- disabled:focus, .el-button--success.is-disabled:hover {
    <#if successColor??>background-color: ${successColor!''};</#if>
    opacity: 0.7;
    <#if successColor??>border-color: ${successColor!''};</#if>
}
.el-tag.el-tag--success {
    <#if successColor??>background-color: ${successColor!''};</#if>
    <#if successColor??>border-color: ${successColor!''};</#if>
    opacity: 0.6;
    color: #FFF;
}
.el-notification .el-icon-success {
    <#if successColor??>color: ${successColor!''};</#if>
}
.el-message--success .el-message__content {
    <#if successColor??>color: ${successColor!''};</#if>
}
.el-message .el-icon-success {
    <#if successColor??>color: ${successColor!''};</#if>
}

.el-button--warning{
    color: #FFF;
    <#if warningColor??>background-color: ${warningColor!''};</#if>
    <#if warningColor??>border-color: ${warningColor!''};</#if>
}
.el-button--warning:focus, .el-button--warning:hover {
    <#if warningColor??>background: ${warningColor!''};</#if>
    <#if warningColor??>border-color: ${warningColor!''};</#if>
    opacity: 0.8;
    color: #FFF;
}
.el-button--warning.is-disabled, .el-button--warning.is-disabled:active, .el-button--warning.is- disabled:focus, .el-button--warning.is-disabled:hover {
    <#if warningColor??>background-color: ${warningColor!''};</#if>
    opacity: 0.7;
    <#if warningColor??>border-color: ${warningColor!''};</#if>
}
.el-tag.el-tag--warning {
    <#if warningColor??>background-color: ${warningColor!''};</#if>
    <#if warningColor??>border-color: ${warningColor!''};</#if>
    opacity: 0.6;
    color: #fff;
}
.el-notification .el-icon-warning {
    <#if warningColor??>color: ${warningColor!''};</#if>
}
.el-message--warning .el-message__content {
    <#if warningColor??>color: ${warningColor!''};</#if>
}
.el-message .el-icon-warning {
    <#if warningColor??>color: ${warningColor!''};</#if>
}

.el-button--danger{
    color: #FFF;
    <#if dangerColor??>background-color: ${dangerColor!''};</#if>
    <#if dangerColor??>border-color: ${dangerColor!''};</#if>
}
.el-button--danger:focus, .el-button--danger:hover {
    <#if dangerColor??>background: ${dangerColor!''};</#if>
    <#if dangerColor??>border-color: ${dangerColor!''};</#if>
    opacity: 0.8;
    color: #FFF;
}
.el-button--danger.is-disabled, .el-button--danger.is-disabled:active, .el-button--danger.is- disabled:focus, .el-button--danger.is-disabled:hover {
    <#if dangerColor??>background-color: ${dangerColor!''};</#if>
    opacity: 0.7;
    <#if dangerColor??>border-color: ${dangerColor!''};</#if>
}
.el-tag.el-tag--danger {
    <#if dangerColor??>background-color: ${dangerColor!''};</#if>
    <#if dangerColor??>border-color: ${dangerColor!''};</#if>
    opacity: 0.6;
    color: #fff;
}
.el-notification .el-icon-danger {
    <#if dangerColor??>color: ${dangerColor!''};</#if>
}
.el-message--danger .el-message__content {
    <#if dangerColor??>color: ${dangerColor!''};</#if>
}
.el-message .el-icon-danger {
    <#if dangerColor??>color: ${dangerColor!''};</#if>
}

.el-button--info{
    color: #FFF;
    <#if infoColor??>background-color: ${infoColor!''};</#if>
    <#if infoColor??>border-color: ${infoColor!''};</#if>
}
.el-button--info:focus, .el-button--info:hover {
    <#if infoColor??>background: ${infoColor!''};</#if>
    <#if infoColor??>border-color: ${infoColor!''};</#if>
    opacity: 0.8;
    color: #FFF;
}
.el-button--info.is-disabled, .el-button--info.is-disabled:active, .el-button--info.is-disabled:focus,  .el-button--info.is-disabled:hover {
    <#if infoColor??>background-color: ${infoColor!''};</#if>
    opacity: 0.7;
    <#if infoColor??>border-color: ${infoColor!''};</#if>
}
.el-tag.el-tag--info {
    <#if infoColor??>background-color: ${infoColor!''};</#if>
    <#if infoColor??>border-color: ${infoColor!''};</#if>
    opacity: 0.6;
    color: #fff;
}
.el-notification .el-icon-info {
    <#if infoColor??>color: ${infoColor!''};</#if>
}
.el-message--info .el-message__content {
    <#if infoColor??>color: ${infoColor!''};</#if>
}
.el-message .el-icon-info {
    <#if infoColor??>color: ${infoColor!''};</#if>
}

.el-radio__input.is-disabled .el-radio__inner, .el-radio__input.is-disabled.is-checked .el-radio__inner {
    <#if baseBackground??>background-color: ${baseBackground!''};</#if>
}
.el-input.is-disabled .el-input__inner {
    <#if baseBackground??>background-color: ${baseBackground!''};</#if>
}
.el-input-number__decrease, .el-input-number__increase {
    <#if baseBackground??>background: ${baseBackground!''};</#if>
}
.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    <#if baseBackground??>background-color: ${baseBackground!''};</#if>
}
.el-cascader-node:not(.is-disabled):focus, .el-cascader-node:not(.is-disabled):hover {
    <#if baseBackground??>background: ${baseBackground!''};</#if>
}
.time-select-item:hover {
    <#if baseBackground??>background-color: ${baseBackground!''};</#if>
}
.el-transfer-panel .el-transfer-panel__header {
    <#if baseBackground??>background: ${baseBackground!''};</#if>
}
.el-table--enable-row-hover .el-table__body tr:hover>td {
    <#if baseBackground??>background-color: ${baseBackground!''};</#if>
}
.el-table thead.is-group th {
    <#if baseBackground??>background: ${baseBackground!''};</#if>
}
.el-tree-node__content:hover {
    <#if baseBackground??>background-color: ${baseBackground!''};</#if>
}

.el-menu {
  text-align: left;
  border: 0;
  <#if headerColor??>background-color:${headerColor};</#if>
}

.page-header {
    <#if headerColor??>background-color: ${headerColor};</#if>
}
.page-footer {
   <#if headerColor??>background-color:${headerColor};</#if>
}


.menus {
   <#if menuColor??> background-color: ${menuColor};</#if>
}
.menus .el-menu {
  <#if menuColor??>background-color:${menuColor};</#if>
}
.el-submenu .el-menu {
    <#if menuColor??>background-color: ${menuColor};</#if>
}
.el-dropdown-menu {
	<#if lighterColor??>border: 1px solid ${lighterColor!''};</#if>
}
.el-dropdown-menu__item--divided {
	<#if lighterColor??>border-top: 1px solid ${lighterColor!''};</#if>
}
.el-radio-button__orig-radio:disabled+.el-radio-button__inner {
	<#if lighterColor??>border-color: ${lighterColor!''};</#if>
}
.el-table td,.el-table th.is-leaf {
	<#if lighterColor??>border-bottom: 1px solid ${lighterColor!''};</#if>
}
.el-table--border,.el-table--group {
	<#if lighterColor??>border: 1px solid ${lighterColor!''};</#if>
}
.el-table--border::after,.el-table--group::after,.el-table::before {
	<#if lighterColor??>background-color: ${lighterColor!''};</#if>
}
.el-table--border td,.el-table--border th,.el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
	<#if lighterColor??>border-right: 1px solid ${lighterColor!''};</#if>
}
.el-table--border th.gutter:last-of-type {
	<#if lighterColor??>border-bottom: 1px solid ${lighterColor!''};</#if>
}
.el-table--border th,.el-table__fixed-right-patch {
	<#if lighterColor??>border-bottom: 1px solid ${lighterColor!''};</#if>
}

.el-table__fixed-right::before,.el-table__fixed::before {
	<#if lighterColor??>background-color: ${lighterColor!''};</#if>
}
.el-table__fixed-footer-wrapper tbody td {
	<#if lighterColor??>border-top: 1px solid ${lighterColor!''};</#if>
}
.el-table__footer-wrapper td {
	<#if lighterColor??>border-top: 1px solid ${lighterColor!''};</#if>
}
.el-table__body-wrapper .el-table--border.is-scrolling-right~.el-table__fixed-right {
	<#if lighterColor??>border-left: 1px solid ${lighterColor!''};</#if>
}
.el-table__column-resize-proxy {
	<#if lighterColor??>border-left: 1px solid ${lighterColor!''};</#if>
}
.el-table-filter {
	<#if lighterColor??>border: 1px solid ${lighterColor!''};</#if>
}
.el-table-filter__bottom {
	<#if lighterColor??>border-top: 1px solid ${lighterColor!''};</#if>
}
.el-date-table th {
	<#if lighterColor??>border-bottom: solid 1px ${lighterColor!''};</#if>
}
.el-date-picker__header--bordered {
	<#if lighterColor??>border-bottom: solid 1px ${lighterColor!''};</#if>
}
.el-popover {
	<#if lighterColor??>border: 1px solid ${lighterColor!''};</#if>
}
.el-message-box {
	<#if lighterColor??>border: 1px solid ${lighterColor!''};</#if>
}
.el-notification {
	<#if lighterColor??>border: 1px solid ${lighterColor!''};</#if>
}
.el-progress-bar__outer {
	<#if lighterColor??>background-color: ${lighterColor!''};</#if>
}
.el-message {
	<#if lighterColor??>border-color: ${lighterColor!''};</#if>
}
.el-card {
	<#if lighterColor??>border: 1px solid ${lighterColor!''};</#if>
}
.el-card__header {
	<#if lighterColor??>border-bottom: 1px solid ${lighterColor!''};</#if>
}
.el-collapse {
	<#if lighterColor??>border-top: 1px solid ${lighterColor!''};</#if>
	<#if lighterColor??>border-bottom: 1px solid ${lighterColor!''};</#if>
}
.el-collapse-item__header {
	<#if lighterColor??>border-bottom: 1px solid ${lighterColor!''};</#if>
}
.el-collapse-item__wrap {
	<#if lighterColor??>border-bottom: 1px solid ${lighterColor!''};</#if>
}
.el-popper[x-placement^=top] .popper__arrow {
	<#if lighterColor??>border-top-color: ${lighterColor!''};</#if>
}
.el-popper[x-placement^=bottom] .popper__arrow {
	<#if lighterColor??>border-bottom-color: ${lighterColor!''};</#if>
}
.el-popper[x-placement^=right] .popper__arrow {
	<#if lighterColor??>border-right-color: ${lighterColor!''};</#if>
}
.el-popper[x-placement^=left] .popper__arrow {
	<#if lighterColor??>border-left-color: ${lighterColor!''};</#if>
}
.el-color-picker__panel {
	<#if lighterColor??>border: 1px solid ${lighterColor!''};</#if>
}
.el-button.is-disabled,.el-button.is-disabled:focus,.el-button.is-disabled:hover {
	<#if lighterColor??>border-color: ${lighterColor!''};</#if>
}
.el-button.is-disabled.is-plain,.el-button.is-disabled.is-plain:focus,.el-button.is-disabled.is-plain:hover {
	<#if lighterColor??>border-color: ${lighterColor!''};</#if>
}
.el-transfer-panel {
	<#if lighterColor??>border: 1px solid ${lighterColor!''};</#if>
}
.el-transfer-panel .el-transfer-panel__header {
	<#if lighterColor??>border-bottom: 1px solid ${lighterColor!''};</#if>
}
.el-transfer-panel .el-transfer-panel__footer {
	<#if lighterColor??>border-top: 1px solid ${lighterColor!''};</#if>
}
.el-calendar__header {
	<#if lighterColor??>border-bottom: 1px solid ${lighterColor!''};</#if>
}
.el-calendar-table td {
	<#if lighterColor??>border-bottom: 1px solid ${lighterColor!''};</#if>
	<#if lighterColor??>border-right: 1px solid ${lighterColor!''};</#if>
}
.el-calendar-table tr:first-child td {
	<#if lighterColor??>border-top: 1px solid ${lighterColor!''};</#if>
}
.el-calendar-table tr td:first-child {
	<#if lighterColor??>border-left: 1px solid ${lighterColor!''};</#if>
}
.el-checkbox.is-bordered.is-disabled {
	<#if lighterColor??>border-color: ${lighterColor!''};</#if>
}
.el-checkbox-button.is-disabled .el-checkbox-button__inner {
	<#if lighterColor??>border-color: ${lighterColor!''};</#if>
}
.el-checkbox-button.is-disabled:first-child .el-checkbox-button__inner {
	<#if lighterColor??>border-left-color: ${lighterColor!''};</#if>
}

.el-radio.is-bordered.is-disabled {
	<#if lighterColor??>border-color: ${lighterColor!''};</#if>
}



.el-radio-button__inner {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}
.el-radio-button:first-child .el-radio-button__inner {
	<#if baseColor??>border-left: 1px solid ${baseColor!''};</#if>
}
.el-switch__core {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
	<#if baseColor??>background: ${baseColor!''};</#if>
}
.el-tabs--border-card {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
	<#if baseColor??>border-right-color: ${baseColor!''};</#if>
	<#if baseColor??>border-left-color: ${baseColor!''};</#if>
}
.el-tabs--bottom.el-tabs--border-card .el-tabs__header.is-bottom {
	<#if baseColor??>border-top: 1px solid ${baseColor!''};</#if>
}
.el-input-number__increase {
	<#if baseColor??>border-left: 1px solid ${baseColor!''};</#if>
}
.el-input-number__decrease {
	<#if baseColor??>border-right: 1px solid ${baseColor!''};</#if>
}
.el-input-number.is-controls-right .el-input-number__increase {
	<#if baseColor??>border-bottom: 1px solid ${baseColor!''};</#if>
}
.el-input-number.is-controls-right .el-input-number__decrease {
	<#if baseColor??>border-left: 1px solid ${baseColor!''};</#if>
}
.el-slider.is-vertical.el-slider--with-input .el-slider__input .el-input-number__decrease,.el-slider.is-vertical.el-slider--with-input .el-slider__input .el-input-number__increase {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}
.el-upload-dragger~.el-upload__files {
	<#if baseColor??>border-top: 1px solid ${baseColor!''};</#if>
}
.el-textarea__inner {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}
.el-input__inner {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}
.el-input-group__append,.el-input-group__prepend {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}
.el-button {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}
.el-transfer__button.is-disabled,.el-transfer__button.is-disabled:hover {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}
.el-divider {
	<#if baseColor??>background-color: ${baseColor!''};</#if>
}
.el-page-header__left::after {
	<#if baseColor??>background-color: ${baseColor!''};</#if>
}
.el-checkbox.is-bordered {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}
.el-checkbox__input.is-disabled .el-checkbox__inner {
	<#if baseColor??>border-color: ${baseColor!''};</#if>
}
.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
	<#if baseColor??>border-color: ${baseColor!''};</#if>
}
.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner {
	<#if baseColor??>border-color: ${baseColor!''};</#if>
}
.el-checkbox__inner {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}
.el-checkbox-button__inner {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}
.el-checkbox-button:first-child .el-checkbox-button__inner {
	<#if baseColor??>border-left: 1px solid ${baseColor!''};</#if>
}
.el-radio.is-bordered {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}
.el-radio__inner {
	<#if baseColor??>border: 1px solid ${baseColor!''};</#if>
}


.winui-dialog .winui-dialog-header {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
}
.winui-footer {
     <#if primaryColor??>background-color: ${primaryColor!''};</#if>
}
.winui-footer .el-tabs--border-card {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
}
.winui-start {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
}
.winui-footer .el-tabs--border-card>.el-tabs__header {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
}
.winui-start-center .el-menu {
    <#if primaryColor??>background-color: ${primaryColor!''};</#if>
}
.vxe-modal--wrapper .vxe-modal--header {
	<#if primaryColor??>background-color: ${primaryColor!''};</#if>
}