sap.ui.define([
		"xxx/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("Balance").length, 1, "The sorting by Balance returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("CardName").length, 1, "The sorting by CardName returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("Balance").length, 1, "The group by Balance returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to Balance if the user groupes by Balance", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("Balance");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "Balance", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by CardName and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "Balance");

		this.oGroupSortState.sort("CardName");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});